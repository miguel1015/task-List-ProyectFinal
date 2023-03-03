import React from "react";
import "./taskList.css";
import { useState } from "react";
import { FcEditImage } from "react-icons/fc";
import icono from "./avatarIcon.png";
import {
  Modal,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  useDeleteTaskMutation,
  useGetTaskQuery,
  usePostTaskMutation,
  usePutTaskEstadoMutation,
  usePutTaskMutation,
} from "../redux/api";
import ButtonEliminar from "./ButtonEliminar";

export default function TaskLits() {
  //para obtener las tareas hechas.
  const { data } = useGetTaskQuery();
  //para crear una tarea.
  const [dataTask, { data: dataMovies, isError, error }] =
    usePostTaskMutation();
  const [tareas, setTareas] = useState({
    task: "",
    description: "",
  });
  //para abri el modal.
  const { isOpen, onOpen, onClose } = useDisclosure();
  //variables de estado para obtener el valor.
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  //es una condicion para abir la parte para editar.
  const [indexEdit, setIndexEdit] = useState("");
  // para actualizar los datos.
  const [update] = usePutTaskMutation();

  const [updateEstado] = usePutTaskEstadoMutation();
  //Eliminar tarea
  const [deleteTask] = useDeleteTaskMutation();

  //alerta de editar
  const [alertEditar, setAlertEditar] = useState(false);
  //alerta de eliminar


  //alertas para el estado de las tareas.
  const [alert, setAlert] = useState(false);
  const [alert2, setAlert2] = useState(false);


  //enviar datos al formulario
  const handleForm = (e) => {
    e.preventDefault();
    setTareas({
      ...tareas,
      [e.target.name]: e.target.value,
      estado: false,
    });
    console.log(tareas);
  };

  //agregar tarea
  const formulario = (e) => {
    e.preventDefault();
    dataTask(tareas);
    console.log("listo");
  };

  //boton de editar
  const botonEditar = (_id, task, description) => {
    update({
      _id,
      post: { task: task, description: description },
    });
    onOpen();
  };
  const onChange = (e) => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  const botonEliminar = (_id) => {
    deleteTask({ _id });
  };

  const botonEditarEstado = (_id, estado) => {
    updateEstado({
      _id,
      dataEstado: { estado: estado },
    });
  };

  return (
    <div>
      <div className="darMode">
        <input type="checkbox" id="toggle" className="toggle--checkbox" />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
        <div className="background"></div>
      </div>

      <h1 className="h1taskList">Task List</h1>
      {/* formulario  */}
      <div className="divForm">
        <form className="primerformulario" onSubmit={formulario}>
          <input
            type="text"
            className="inputSpanid"
            placeholder="Ingrese su tarea"
            name="task"
            required
            onChange={handleForm}
          ></input>
          <span className="spanid">Tarea</span>
          <input
            type="text"
            placeholder="Ingrese su descripcion"
            name="description"
            required
            onChange={handleForm}
          ></input>
          <span className="spannombre">Descripcion</span>
          <button className="glowing-btn">
            <span className="glowing-txt">
              EN<span className="faulty-letter">V</span>IAR
            </span>
          </button>
        </form>
      </div>
      {/* tabla-------------------------------------------------------------------- */}
      <table>
        <tbody>
          <tr>
            <th style={{ background: "transparent" }}></th>
            <th></th>
            <th>Tarea</th>
            <th>Descripcion</th>
          </tr>
          {data?.map((id, index) => (
            <tr key={index}>
              <td style={{ background: "transparent" }}>
                <img src={icono} alt="" style={{ width: "50px" }}></img>
              </td>
              <td>
                {id.estado === true ? (
                  <input
                    type="checkbox"
                    defaultChecked
                    style={{
                      cursor: "pointer",
                      width: "14.5%",
                      borderRadius: "50%",
                    }}
                    onChange={() => {
                      botonEditarEstado(id._id, id.estado === false);
                      setTimeout(() => {
                        setAlert2(true);
                        setTimeout(() => {
                          setAlert2(false);
                        }, 1500);
                      }, 0);
                    }}
                  />
                ) : (
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer", width: "14.5%" }}
                    onChange={() => {
                      botonEditarEstado(id._id, id.estado === false);
                      setTimeout(() => {
                        setAlert(true);
                        setTimeout(() => {
                          setAlert(false);
                        }, 1500);
                      }, 0);
                    }}
                  />
                )}
              </td>
              <td>
                {id.estado === true ? (
                  <p style={{ textDecoration: "line-through red" }}>
                    {id.task}
                  </p>
                ) : (
                  <p>{id.task}</p>
                )}
              </td>
              <td>
                {id.estado === true ? (
                  <p style={{ textDecoration: "line-through red" }}>
                    {id.description}
                  </p>
                ) : (
                  <p>{id.description}</p>
                )}
              </td>

              <td className="btnEdit">
                <button
                  onClick={() => {
                    onOpen();
                    setIndexEdit(id._id);
                    setTask(id.task);
                    setDescription(id.description);
                  }}
                  className="button-86"
                >
                  <FcEditImage className="iconedit"></FcEditImage>
                </button>
                {/* Modal de editar */}
                {indexEdit === id._id ? (
                  <div>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalFooter className="modalEdit">
                        <ModalCloseButton className="ModalCloseBoton" />
                        <Input
                          className="inputName"
                          value={task}
                          name="task"
                          onChange={onChange}
                        />
                        <Input
                          className="inputFav"
                          value={description}
                          name="description"
                          onChange={onChange}
                        />
                        <Button
                          className="botonModalEditar"
                          onClick={() => {
                            botonEditar(id._id, task, description);
                            onClose();
                            setTimeout(() => {
                              setAlertEditar(true);
                              setTimeout(() => {
                                setAlertEditar(false);
                              }, 1500);
                            }, 0);
                          }}
                        >
                          Actualizar
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                ) : null}
              </td>
              <ButtonEliminar botonEliminar={botonEliminar} id={id}/>
            </tr>
          ))}
        </tbody>
      </table>

      {alertEditar ? (
        <Alert
          status="success"
          variant="solid"
          color="white"
          background="green"
          width={"27%"}
          pos="absolute"
          top="1300"
          left="15"
          height={"80"}
        >
          <AlertIcon boxSize={"75%"} width="12%" />
          Tarea Actualizada
        </Alert>
      ) : null}

      

      {alert ? (
        <Alert
          status="success"
          variant="solid"
          color="white"
          background="green"
          width={"27%"}
          pos="absolute"
          top="1300"
          left="15"
          height={"80"}
        >
          <AlertIcon boxSize={"75%"} width="12%" />
          Tarea completada
        </Alert>
      ) : null}

      {alert2 ? (
        <Alert
          status="warning"
          variant="solid"
          color="white"
          background="red"
          width={"27%"}
          pos="absolute"
          top="1300"
          left="15"
          height={"80"}
        >
          <AlertIcon boxSize={"75%"} width="12%" />
          Tarea Descompletada
        </Alert>
      ) : null}
    </div>
  );
}
