import React, {ChangeEvent, useState} from 'react';
import {
    useAddPersonMutation,
    useDeletePersonMutation,
    useGetPersonsQuery,
    useUpdatePersonMutation
} from "../api/persons-api";
import {PersonType} from "../api/types";

export const App = () => {
    const [add, setAdd] = useState<string>('')
    const [update, setUpdate] = useState<string>('')

    const {data, isLoading} = useGetPersonsQuery('');
    const [addPerson, {}] = useAddPersonMutation();
    const [deletePerson, {}] = useDeletePersonMutation();
    const [updatePerson, {}] = useUpdatePersonMutation();

    const addPersonHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAdd(e.currentTarget.value)
    }

    const updatePersonHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdate(e.currentTarget.value)
    }

    const deleteHandler = async (id: number) => {
        await deletePerson({id: id})
    }

    const addPersonClickHandler = async () => {
        await addPerson({firstName: add, lastName: 'Yo'}).unwrap
        setAdd('')
    }

    const updatePersonClickHandler = async (id: number) => {
        await updatePerson({firstName: update, lastName: 'Wow', id: id})
        setUpdate('')
    }

    if (isLoading) {
        return <h1>...Loading</h1>
    }

    return (
        <div>
            <input type="text" value={add} onChange={addPersonHandler} placeholder={'Add person'}/>
            <button onClick={addPersonClickHandler}>Add Person</button>
            <div>
                {
                    data && data.map((p: PersonType) => {
                        return (
                            <div key={p.id}>
                                <p>{p.firstName}</p>
                                <p>{p.lastName}</p>
                                <button onClick={() => deleteHandler(p.id)}>X</button>
                                <input type="text" value={update} onChange={updatePersonHandler}
                                       placeholder={'Update person'}/>
                                <button onClick={() => updatePersonClickHandler(p.id)}>Update Person</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
