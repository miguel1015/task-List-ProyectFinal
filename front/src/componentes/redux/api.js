import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const TaskApi = createApi({
  reducerPath: 'taskApo',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
  tagTypes: ["refreshComentario", "refreshPostComentario"],
  keepUnusedDataFor: 3,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => ({
        headers:{"Content-type": "application/json"},
        url:"/api/taskList",
        method:"GET"
      }),
      providesTags:["refreshComentario"]
    }),
    postTask: builder.mutation({
        query:(dataTask) => ({
            headers:{"Content-type": "application/json"},
            url:"/api/taskList",
            method:"POST",
            body:dataTask
        }),
        invalidatesTags:["refreshComentario", "refreshPostComentario"]
    }),
    putTask: builder.mutation({
        query: ({_id,post}) => ({
            url: `/api/taskList/${_id}`,
            method: "PUT",
            body: post
        }),
        invalidatesTags:["refreshComentario", "refreshPostComentario"]
    }),
    putTaskEstado: builder.mutation({
      query: ({_id,dataEstado}) => ({
          url: `/api/taskListEstado/${_id}`,
          method: "PUT",
          body: dataEstado
      }),
      invalidatesTags:["refreshComentario", "refreshPostComentario"]
  }),
    deleteTask: builder.mutation({
      query: ({_id}) => ({
        url: `/api/taskList/${_id}`,
        method: "DELETE",
        headers:{"Content-type": "application/json"}
      }),
      invalidatesTags:["refreshComentario", "refreshPostComentario"]
    }),
    postUser: builder.mutation({
      query:(datauser) => ({
          headers:{"Content-type": "application/json"},
          url:"/user/agregar",
          method:"POST",
          body:datauser
      }),
      invalidatesTags:["refreshComentario", "refreshPostComentario"]
  })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTaskQuery, usePostTaskMutation, usePutTaskMutation, useDeleteTaskMutation, usePostUserMutation, usePutTaskEstadoMutation } = TaskApi