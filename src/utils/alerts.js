import Swal from 'sweetalert2'

export const alertWrongMail = (navigate) => {
    return Swal.fire({
        title: `El usuario no existe`,
        showDenyButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Crear cuenta',
        denyButtonText: `Cancelar`,
      })
      .then((result) => {
      if (result.isConfirmed) {
        navigate("/register")
      } else if (result.isDenied) {
        navigate("/")
      }
    })
}

export const alertNewUser = () => {
  return Swal.fire(`Usuario creado exitosamente`)
}