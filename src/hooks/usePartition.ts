export const usePartition = (value: string) => {
    return value.split(' ').map<string[]>(part => part.split(''))
}
