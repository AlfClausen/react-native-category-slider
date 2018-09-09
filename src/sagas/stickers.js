import R from 'ramda'

const data = [
    {
        category: 'cats',
        title: 'Котэ',
        color: 'rgba(140, 160, 200, 0.5)',
        stickers: [
            {
                id: 0,
                img: 'cat0' // Here should be image url
            },
            {
                id: 1,
                img: 'cat1'
            },
            {
                id: 2,
                img: 'cat2'
            },
            {
                id: 3,
                img: 'cat3'
            },
            {
                id: 4,
                img: 'cat4'
            },
            {
                id: 5,
                img: 'cat5'
            },
            {
                id: 6,
                img: 'cat6'
            },
            {
                id: 7,
                img: 'cat7'
            },
            {
                id: 8,
                img: 'cat8'
            }
        ]
    },
    {
        category: 'mems',
        title: 'Мемасы',
        color: 'rgba(190, 140, 200, 0.5)',
        stickers: [
            {
                id: 9,
                img: 'mem0'
            },
            {
                id: 10,
                img: 'mem1'
            },
            {
                id: 11,
                img: 'mem2'
            },
            {
                id: 12,
                img: 'mem3'
            },
            {
                id: 13,
                img: 'mem4'
            },
        ]
    },
    {
        category: 'valley',
        title: 'Долина',
        color: 'rgba(200, 180, 140, 0.5)',
        stickers: [
            {
                id: 14,
                img: 'valley0'
            },
            {
                id: 15,
                img: 'valley1'
            },
            {
                id: 16,
                img: 'valley2'
            },
            {
                id: 17,
                img: 'valley3'
            },
            {
                id: 18,
                img: 'valley4'
            },
            {
                id: 19,
                img: 'valley5'
            },
        ]
    }
]

// In real app here should be saga with api call

export function getStickers() {
    // Combine arrays of objects into one array
    // console.log(R.flatten(R.map(cat => R.map(sticker => R.merge(R.dissoc('stickers', cat), sticker), cat.stickers), data)))
    return R.flatten(R.map(cat => R.map(sticker => R.merge(R.dissoc('stickers', cat), sticker), cat.stickers), data))
}

// export function getCurrentCategory(currentSticker) {
//     const check = (sticker) => {
//         sticker.id === currentSticker
//         return sticker.category
//     }
//     R.map(check, getStickers())
// }

export function getCategories(category) {
    if (category) {
        // Return first equal category field value from data array
        return R.find(R.propEq('category', category))(data)
    }
    return data
}
