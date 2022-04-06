import { combine, createEvent, createStore, createEffect } from "effector";
import { thulloApi } from "@shared/api";
import { Board } from "@shared/api";
import axios from "axios";

export const create = createEvent<any>();

// console.log(process.env.API_URL);
export const getBoardsListFx = createEffect({
    handler: async () => {
        return await thulloApi.boards.getBoardsList();
    },
});

export const $boards = createStore([]).on(
    getBoardsListFx.doneData,
    (_, x) => x.data
);

// $boards.on(create, (boards, board) => [...boards, board]);

// const length = $boards.map((boards) => [
//     ...boards,
//     { id: boards.length + 6, name: "test" },
// ]);

$boards.watch((boards) => {
    console.log("длина строки", boards);
});

export const $boardsList = combine($boards, (tasks) => Object.values(tasks));

//Modal
export const openModal = createEvent();
export const closeModal = createEvent();

export const $isOpenModal = createStore(false);

$isOpenModal.on(openModal, () => true);
$isOpenModal.on(closeModal, () => false);
