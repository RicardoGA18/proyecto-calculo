import React, {useContext} from 'react'
import TextField from './TextField'
import Button from './Button'
import { Form as FormFormik, FormikProvider, useFormik } from 'formik'
import * as yup from 'yup'
import { hallarCoordenadasTrayectoria } from '../utils'
import AppContext from '../context/AppContext'

const Form = ({variant}) => {
  const { setSeries } = useContext(AppContext)
  
  const formSchema = yup.object().shape({
    variant: yup.number(),
    xo: yup.number().required('* Campo Requerido'),
    yo: yup.number().required('* Campo Requerido'),
    vo: yup.number().when('variant',{
      is: 0,
      then: yup.number().required('* Campo Requerido'),
    }),
    angle: yup.number().when('variant',{
      is: 0,
      then: yup.number().required('* Campo Requerido'),
    }),
    vox: yup.number().when('variant',{
      is: 1,
      then: yup.number().required('* Campo Requerido'),
    }),
    voy: yup.number().when('variant',{
      is: 1,
      then: yup.number().required('* Campo Requerido'),
    }),
    g: yup.number().required('* Campo Requerido'),
  })

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      variant: variant,
      xo: '',
      yo: '',
      vo: '',
      angle: '',
      vox: '',
      voy: '',
      g: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      const coordenadas = hallarCoordenadasTrayectoria(
        values.variant,
        values.xo,
        values.yo,
        values.vox,
        values.voy,
        values.vo,
        values.angle,
        values.g
      )
      setSeries([{
        name: 'Y',
        data: coordenadas
      }])
    }
  })

  const { 
    getFieldProps,
    values,
    errors,
    touched,
  } = formik

  return (
    <div className="FormBox">
      <h2 className="f-subtitle1-b">Ingrese los datos</h2>
      <FormikProvider value={formik}>
        <FormFormik className="Form" autoComplete="off">
          <input 
            type="hidden"
            {...getFieldProps('variant')}
            value={variant}
          />
          <TextField
            type="number"
            label="Posición en X (Xo)"
            {...getFieldProps('xo')}
            value={values.xo}
            error={errors.xo && touched.xo}
            helperText={touched.xo && errors.xo}
          />
          <TextField
            type="number"
            label="Posición en Y (Yo)"
            {...getFieldProps('yo')}
            value={values.yo}
            error={errors.yo && touched.yo}
            helperText={touched.yo && errors.yo}
          />
          <TextField
            type="number"
            label="Módulo Velocidad Inicial (Vo)"
            hidden={variant === 1}
            {...getFieldProps('vo')}
            value={values.vo}
            error={errors.vo && touched.vo}
            helperText={touched.vo && errors.vo}
          />
          <TextField
            type="number"
            label="Ángulo de salida (&#945;)"
            hidden={variant === 1}
            {...getFieldProps('angle')}
            value={values.angle}
            error={errors.angle && touched.angle}
            helperText={touched.angle && errors.angle}
          />
          <TextField
            type="number"
            label="Componente horizontal (Vox)"
            hidden={variant === 0}
            {...getFieldProps('vox')}
            value={values.vox}
            error={errors.vox && touched.vox}
            helperText={touched.vox && errors.vox}
          />
          <TextField
            type="number"
            label="Componente vertical (Voy)"
            hidden={variant === 0}
            {...getFieldProps('voy')}
            value={values.voy}
            error={errors.voy && touched.voy}
            helperText={touched.voy && errors.voy}
          />
          <TextField
            type="number"
            label="Gravedad (g)"
            {...getFieldProps('g')}
            value={values.g}
            error={errors.g && touched.g}
            helperText={touched.g && errors.g}
          />
          <div className="btnBox">
            <Button 
              type="submit"
              disabled={false}
            >
              Calcular
            </Button>
          </div>
        </FormFormik>
      </FormikProvider>
    </div>
  )
}

export default Form
