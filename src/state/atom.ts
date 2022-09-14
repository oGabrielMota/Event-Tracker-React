import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltrosDeEventos } from "../interfaces/IFiltrosDeEventos";
import { eventosASync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosASync,
});

export const filtroDeEventos = atom<IFiltrosDeEventos>({
  key: "filtroDeEventos",
  default: {},
});
