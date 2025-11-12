export type ReceptT = {
    id: number;
    title: string;
    produceItem: string;
    rawMaterials: MaterialsT[];
}

export type MaterialsT = {
    id: number;
    title: string;
    count: number
}

export const Test_Data: ReceptT[] = [
    {
        id: 1,
        title: 'Пирог с мясом',
        produceItem: 'pirogWithMeat',
        rawMaterials: [
            {
                id: 1,
                title: "мясо",
                count: 2
            },
            {
                id: 2,
                title: "тесто",
                count: 1
            }
        ]
    },
    {
        id: 2,
        title: 'Сделать пирог с яблоком',
        produceItem: 'pirogWithMeat',
        rawMaterials: [
            {
                id: 1,
                title: "яблоко",
                count: 2
            },
            {
                id: 2,
                title: "тесто",
                count: 1
            }
        ]
    },
    {
        id: 3,
        title: 'Фруктовый салат',
        produceItem: 'fruitsSalat',
        rawMaterials: [
            {
                id: 1,
                title: "апельсин",
                count: 4
            },
            {
                id: 2,
                title: "яблоко",
                count: 6
            },
            {
                id: 3,
                title: "груша",
                count: 2
            },
            {
                id: 4,
                title: "гранат",
                count: 1
            }
        ]
    },
    {
        id: 4,
        title: 'Сделать пирог с фиксиками',
        produceItem: 'pirogWithMeat',
        rawMaterials: [
            {
                id: 1,
                title: "фиксики",
                count: 2
            },
            {
                id: 2,
                title: "тесто",
                count: 1
            }
        ]
    },
]
