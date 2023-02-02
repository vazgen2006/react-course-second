import React from 'react'
import Button from '../button'
import Input from '../inputs/input'
import { useState } from 'react'
import { validate } from '../../../util/validate'

const Form = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangePas = (e) => {
        setPassword(e.target.value)
    }

    const onClick = () => {
        console.log(validate(name))
    }

    return (
        <div className='login'>
            <Input type={"Text"} value={name} onChange={onChangeName} />
            <Input type={"password"} value={password} onChange={onChangePas} />

            <Button onClick={onClick} />
        </div>
    )
}

export default Form
