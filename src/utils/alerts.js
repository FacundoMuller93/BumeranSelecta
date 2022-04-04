import Swal from 'sweetalert2'

export const alertWrongMail = (navigate) => {
    return Swal.fire({
        title: `El usuario no existe`,
        confirmButtonText: 'Crear cuenta',
      })
      .then((result) => navigate("/register"))
}