import create from 'zustand';

const sceneData = create(set => ({
    sceneIndex: 0,
    setSceneIndex: (sceneIndex) => set(() => { return { sceneIndex } }),
}));

const pageData = create((set) => ({
    pageIndex: 0,
    setPageIndex: (pageIndex) => set(() => {
        return { pageIndex };
    }),
    dataAry: ['name', 'image', 'qusetion', 'answer1', 'answer2', 'answer3', 'answer4'],
    setAry: (dataAry) => set(() => { return { dataAry } })
}
))

const userSelectData = create((set) => ({
    userSelect: [],
    setUserSelect: (userSelect) => set(() => {
        return { userSelect };
    })
}
))

export {sceneData, pageData, userSelectData}