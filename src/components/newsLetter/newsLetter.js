
import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Alert, Button, TextField } from '@mui/material'
import './newsLetter.css'

function Newsletter() {
    const [ alerta, setAlerta ] = useState(false)
    const [ mensaje, setMensaje ] = useState()
    const validationSchema = yup.object({
        nombre: yup
            .string('Introduzca su nombre')
            .min(3, 'Introduzca al menos 3 caracteres')
            .required('El nombre es requerido'),
        apellido: yup
            .string('Introduzca su apellido')
            .min(3, 'Introduzca al menos 3 caracteres')
            .required('El apellido es requerido'),
        email: yup
            .string('Introduzca su email')
            .email('Introduzca un email valido')
            .required('El email es requerido'),
    })

    const formik = useFormik({
        initialValues: {},
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setAlerta(true)
            setMensaje(`Felicidades ${values.nombre} ${values.apellido} ! su correo ${values.email} se ha suscrito a nuestro newsletter.`)
        }
    })

    return (
        <div>
            {alerta && <Alert className='alert' onClose={() => {
                    setAlerta(false)
                    setMensaje('')
                }}>{mensaje}
                </Alert>
            }
          <form onSubmit={formik.handleSubmit} className='form-container'>
            <TextField
                className='input-field'
                id="nombre"
                name="nombre"
                label="Nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
            />
            <TextField
                className='input-field'
                id="apellido"
                name="apellido"
                label="Apellido"
                value={formik.values.apellido}
                onChange={formik.handleChange}
                error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                helperText={formik.touched.apellido && formik.errors.apellido}
            />
            <TextField
                className='input-field'
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <Button className="boton-form" color="primary" variant="contained" type="submit">
                Suscribirse
            </Button>
          </form>
        </div>
    )
}

export default Newsletter