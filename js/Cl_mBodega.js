export default class Cl_mBodega {
    constructor(a, b, c) {
        this.acmBill10 = +a;
        this.acmBill20 = +b;
        this.acmBill50 = +c;
    }
    procesarCliente(cliente) {
        if (cliente.denominacion == 10) {
            this.acmBill10 += cliente.cantidad;
        } else if (cliente.denominacion == 20) {
            this.acmBill20 += cliente.cantidad;
        } else if (cliente.denominacion == 50) {
            this.acmBill50 += cliente.cantidad;
        }
    }

    montoBill10() {
        return this.acmBill10 * 10;
    }
    montoBill20() {
        return this.acmBill20 * 20;
    }
    montoBill50() {
        return this.acmBill50 * 50;
    }
    montoTotal() {
        return this.montoBill10() + this.montoBill20() + this.montoBill50();
    }
}