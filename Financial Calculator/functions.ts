function PVsimple ( FV: number, i:number, n:number) {
    return FV/(1+(i*(n)))
}
function PVcompound ( FV: number, i: number, n: number) {
    return FV/((1+i)**n)
}
function FVsimple ( PV: number, i: number, n: number) {
    return PV*(i+(i*(n)))
}
function FVcompound ( PV: number, i: number, n: number) {
    return (PV)*((1+i)**n)
}
function ordinaryAnnuityPV (A: number, i: number, n: number) {
    return ((A) * ((1-(1/(1+i)**n))/i))
}
function annuityDuePV (A: number, i: number, n: number) {
    return ((A) * ((1-(1/(1+i)**n))/i)*(1+i))
}
export {FVcompound, FVsimple, PVsimple, PVcompound, ordinaryAnnuityPV, annuityDuePV}