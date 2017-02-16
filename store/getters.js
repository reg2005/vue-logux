export const getTopics = state => state.topics
export const getCount = state => state.count
export const isBrowser = state => {
    return typeof document !== 'undefined'
}