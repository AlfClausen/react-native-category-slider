const data = [
    {
        category: 'cats',
        title: 'Котэ',
        stickers: [
            {
                key: 0,
                img: 'cat0' // Here should be image url
            },
            {
                key: 1,
                img: 'cat1'
            },
            {
                key: 2,
                img: 'cat2'
            },
            {
                key: 3,
                img: 'cat3'
            },
            {
                key: 4,
                img: 'cat4'
            },
            {
                key: 5,
                img: 'cat5'
            },
            {
                key: 6,
                img: 'cat6'
            },
            {
                key: 7,
                img: 'cat7'
            },
            {
                key: 8,
                img: 'cat8'
            }
        ]
    }
]

// In real app here should be saga with api call

export function getStickers() {
    return data
}
