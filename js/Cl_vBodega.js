export default class Cl_vBodega {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm"); 
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblMontoBill10 = document.getElementById("mainForm_lblMontoBill10");
        this.lblMontoBill20 = document.getElementById("mainForm_lblMontoBill20");
        this.lblMontoBill50 = document.getElementById("mainForm_lblMontoBill50");
        this.lblMontoTotal = document.getElementById("mainForm_lblMontoTotal");
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    reportarCliente({
        cedula,
        denominacion,
        cantidad,
        montoCuenta,
        montoBill10,
        montoBill20,
        montoBill50,
        montoTotal
    }) {
        this.tabla.innerHTML += `
        <tr>
            <td>${cedula}</td>
            <td>$${denominacion}</td>
            <td>${cantidad}</td>
            <td>$${montoCuenta}</td>
        </tr>
        `;
        this.lblMontoBill10.innerHTML = montoBill10;
        this.lblMontoBill20.innerHTML = montoBill20;
        this.lblMontoBill50.innerHTML = montoBill50;
        this.lblMontoTotal.innerHTML = montoTotal;
    }
}