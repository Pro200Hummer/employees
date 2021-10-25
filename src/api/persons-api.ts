import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {AddPersonRequestType, DeletePersonRequestType, PersonType, UpdatePersonRequestType} from "./types";

//Чтобы не падало ошибок безопасности
/*const apiBase = String(process.env) === 'PRODUCTION' ?
    'https://www.productionapp.com/' : 'http://localhost:9001/'*/

export const personsApi = createApi({
    reducerPath: 'personsApi',
    tagTypes: ['Persons'],
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:9001/`}),
    endpoints: builder => ({
        getPersons: builder.query<PersonType[], string>({
            query: () => `persons`,
            providesTags: result =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Persons' as const, id })),
                        { type: 'Persons', id: 'LIST' },
                    ]
                    : [{ type: 'Persons', id: 'LIST' }],
        }),
        addPerson: builder.mutation({
            query: (body: AddPersonRequestType) => ({
                url: 'persons',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Persons', id: 'LIST'}]
        }),
        deletePerson: builder.mutation({
            query: (body: DeletePersonRequestType) => ({
                url: `persons/${body.id}`,
                method: 'DELETE',
                body
            }),
            invalidatesTags: [{type: 'Persons', id: 'LIST'}]
        }),
        updatePerson: builder.mutation({
            query: (body: UpdatePersonRequestType) => ({
                url: `persons/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: [{type: 'Persons', id: 'LIST'}]
        }),
    }),
});

export const {
    useGetPersonsQuery,
    useAddPersonMutation,
    useDeletePersonMutation,
    useUpdatePersonMutation} = personsApi