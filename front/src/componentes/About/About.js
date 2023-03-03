import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

export default function About() {
  let navigate = useNavigate();

  return (
    <div>
      <h1 className="h1about">sobre nosotros</h1>

      <main className="container">
        <section className="card">
          <div className="product-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1567/1567073.png"
              alt="OFF-white Red Edition"
              draggable="false"
              className="imgAbout"
            />
          </div>
        </section>
      </main>
      <p className="parrafAbout">
        ¿Cómo hacer una lista de tareas que funcione? Una de las razones por las
        que la lista de tareas pendientes no funciona es que la mayoría de las
        personas no saben cómo elaborarlas correctamente. Podría terminar con
        una lista demasiado larga, demasiado corta, demasiado intrincada o
        demasiado confusa, entre otras cosas.</p>
        <hr />
        <p className="parrafAbout" >
        En esta todo app podemos encontrar muichisimos articulos interesantes.
        </p>
        <br />
        <hr />
        <p className="parrafAbout" >#¿Qué es mi producto y para que sirve? Es un TaskList, que funciona para
        dar orden a las multiples funciones o tareas que se presentan en el dia.
        En la parte superiror se encontrara una barra donde se insertaran las
        tareas predestinadas que se realizaran en el dia. Se pueden tachar una
        vez realizadas. Una lista de tareas pendientes, comúnmente conocida como
        to-do list, es una lista de lo que tienes pendiente por hacer. Contiene,
        básicamente, cualquier actividad que debes realizar, pero tener la lista
        por escrito no significa necesariamente que sea útil. Lo que sí puede
        ser muy útil para establecer las prioridades y lograr trabajos de
        calidad es tener la posibilidad de dar seguimiento realmente a los
        plazos de entrega de los trabajos. Sin embargo, con gran frecuencia,
        estas to-do lists suelen estar desorganizadas y desconectadas del
        trabajo que efectivamente haces, lo que conlleva menos claridad y más
        pormenores del trabajo.</p>
        <hr/>
        <p className="parrafAbout" >
        #¿Cuáles son las funcionalidades más importantes y porque los usuarios
        las usarían? Este TaskList posee funcionalidades importantes, entre
        ellas es darle una descripcion, es decir; una vez colocada la tarea, se
        coloca algun tipo de especificacion o una reseña al detalle de dicha
        accion al emplear. tambien posee una opcion de editar la tarea, ya sea
        por alguna equivocacion al colocar una tarea inicialmente o que a medida
        del transcurrir el tiempo se haran ciertas modificaciones pero el
        objetivo sigue siendo el mismo. Tambien podemos encontrar una opcion la
        cual es el de eliminar alguna tarea. Esta se basa en que una vez
        realizada la tarea y no ve perninente dejarla en ese lugar, se puede
        deshacer y de manera inmediata se eliminara. Los usuarios la usarian ya
        que se les facilitara mucho al momento de dar orden a las multiples
        acciones que se realizaran en el dia, ademas de las multiples opciones,
        que dara aun mas dinamismo a su TaskList.</p>
        <hr/>
        <p className="parrafAbout" >
        #¿Cuáles son las funcionalidades que podrías incluir en el futuro? En un
        futuro podria incluir algunas opciones mas en el dinamismo del TaskList
        con el ususario, incluir algunos iconos dependiendo la tarea, algunos
        otros colores y tambien que posea diferentes vistas.</p>
      <button
        className="boton-inicio-about"
        onClick={() => {
          navigate("/home");
        }}
      >
        {" "}
        change to Home page{" "}
      </button>

      <div className="darMode" >
      <input type="checkbox" id="toggle" className="toggle--checkbox" />
      <label htmlFor="toggle" className="toggle--label3">
        <span className="toggle--label-background"></span>
      </label>
      <div className="background"></div>
    </div>   
    </div>
  );
}
