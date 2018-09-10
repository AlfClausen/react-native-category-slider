import R from 'ramda'

const data = [
    {
        id: 0,
        category: 'Котэ',
        color: 'rgba(140, 160, 200, 0.5)',
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
    },
    {
        id: 1,
        category: 'Мемасы',
        color: 'rgba(190, 140, 200, 0.5)',
        stickers: [
            {
                key: 9,
                img: 'mem0'
            },
            {
                key: 10,
                img: 'mem1'
            },
            {
                key: 11,
                img: 'mem2'
            },
            {
                key: 12,
                img: 'mem3'
            },
            {
                key: 13,
                img: 'mem4'
            }
        ]
    },
    {
        id: 2,
        category: 'Долина',
        color: 'rgba(200, 180, 140, 0.5)',
        stickers: [
            {
                key: 14,
                img: 'valley0'
            },
            {
                key: 15,
                img: 'valley1'
            },
            {
                key: 16,
                img: 'valley2'
            },
            {
                key: 17,
                img: 'valley3'
            },
            {
                key: 18,
                img: 'valley4'
            },
            {
                key: 19,
                img: 'valley5'
            }
        ]
    },
    {
        id: 3,
        category: 'Пепе',
        color: 'rgba(160, 200, 140, 0.5)',
        stickers: [
            {
                key: 20,
                img: 'pepe0'
            },
            {
                key: 21,
                img: 'pepe1'
            },
            {
                key: 22,
                img: 'pepe2'
            },
            {
                key: 23,
                img: 'pepe3'
            },
            {
                key: 24,
                img: 'pepe4'
            }
        ]
    }
]

// In real app here should be saga with api call

export function getStickers(key) {
    // Combine arrays of objects into one flat array
    const flatArray = R.flatten(
        R.map(category => R.map(sticker => R.merge(
            R.dissoc('stickers', category), sticker
        ), category.stickers), data)
    )
    if (key || key === 0) {
        return R.find(R.propEq('key', key))(flatArray)
    }
    return flatArray
}

export function getCategories(id) {
    if (id || id === 0) {
        // Return first equal category field value from data array
        return R.find(R.propEq('id', id))(data)
    }
    return data
}
