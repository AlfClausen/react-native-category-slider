import R from 'ramda'

const data = [
    {
        id: 1,
        category: 'cats',
        title: 'Котэ',
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
        id: 2,
        category: 'mems',
        title: 'Мемасы',
        color: 'rgba(190, 140, 200, 0.5)',
        stickers: [
            {
                key: 0,
                img: 'mem0'
            },
            {
                key: 1,
                img: 'mem1'
            },
            {
                key: 2,
                img: 'mem2'
            },
            {
                key: 3,
                img: 'mem3'
            },
            {
                key: 4,
                img: 'mem4'
            },
        ]
    },
    {
        id: 3,
        category: 'valley',
        title: 'Долина',
        color: 'rgba(200, 180, 140, 0.5)',
        stickers: [
            {
                key: 0,
                img: 'valley0'
            },
            {
                key: 1,
                img: 'valley1'
            },
            {
                key: 2,
                img: 'valley2'
            },
            {
                key: 3,
                img: 'valley3'
            },
            {
                key: 4,
                img: 'valley4'
            },
            {
                key: 5,
                img: 'valley5'
            },
        ]
    }
]

// In real app here should be saga with api call
export function getStickers(category) {
    if (category) {
        // Return first equal category field value from data array
        return R.find(R.propEq('category', category))(data)
    }
    return data
}
