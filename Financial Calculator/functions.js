function PVsimple(FV, i, n) {
    return FV / (1 + (i * (n)));
}
function PVcompound(FV, i, n) {
    return FV / ((1 + i) ** n);
}
function FVsimple(PV, i, n) {
    return PV * (i + (i * (n)));
}
function FVcompound(PV, i, n) {
    return (PV) * ((1 + i) ** n);
}
function ordinaryAnnuityPV(A, i, n) {
    return ((A) * ((1 - (1 / (1 + i) ** n)) / i));
}
function annuityDuePV(A, i, n) {
    return ((A) * ((1 - (1 / (1 + i) ** n)) / i) * (1 + i));
}
export { FVcompound, FVsimple, PVsimple, PVcompound, ordinaryAnnuityPV, annuityDuePV };
