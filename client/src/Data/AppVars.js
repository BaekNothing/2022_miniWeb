import create from 'zustand';

const sceneData = create(set => ({
    sceneIndex: 0,
    setSceneIndex: (sceneIndex) => set(() => { return { sceneIndex } }),
    
}));

const pageData = create((set) => ({
    previndex: [],
    setPrevIndex: (prevIndex) => set(() => { return { prevIndex } }),
    pageIndex: 0,
    setPageIndex: (pageIndex) => set(() => { return { pageIndex } }),
    dataAry: ['name', 'image', 'qusetion', 
        'answer1', 'answer2', 'answer3', 'answer4', 'answer5', 'answer6', 
        'm1', 'm2', 'm3', 'm4', 'm5', 'm6'],
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