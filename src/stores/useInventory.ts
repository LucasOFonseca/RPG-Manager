import create from 'zustand'
import { persist } from 'zustand/middleware'
import { CoinItem } from '../shared/models'

interface UseInventoryState {
  coins?: CoinItem[]
  addCoinSlot: (coinInfo: CoinItem) => void
  editCoinInfo: (name: string, quantity: number, newName?: string) => void
  removeCoinSlot: (name: string) => void
}

export const useInventory = create(
  persist<UseInventoryState>(
    (set, get) => ({
      addCoinSlot: (coinInfo) => {
        const coins = get().coins ?? []

        coins.push(coinInfo)

        set({ coins })
      },
      editCoinInfo: (name, quantity, newName) => {
        const coins = get().coins
        const coinIndex = coins?.findIndex((coin) => coin.name === name)

        if (
          coins !== undefined &&
          coinIndex !== undefined &&
          coinIndex !== -1
        ) {
          coins[coinIndex].quantity = quantity
          coins[coinIndex].name = newName ?? name

          set({ coins })
        }
      },
      removeCoinSlot: (name) => {
        const coins = get().coins?.filter((coin) => coin.name !== name)

        set({ coins })
      },
    }),
    { name: 'inventory' }
  )
)
