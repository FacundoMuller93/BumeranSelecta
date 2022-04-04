import Swal from 'sweetalert2'

export const alertWrongMail = () => {
    return Swal.fire({
        title: `El usuario no existe`,
        confirmButtonText: 'Crear cuenta',
      })
}

export const alertDiffPass = () => {
  return Swal.fire('La contraseña debe ser igual.')
}