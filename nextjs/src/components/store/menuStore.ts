import { create } from 'zustand'


type MenuStore = {
    isMobileMenuOpen: boolean,
    setIsMobileMenuOpen: (isOpen: boolean) => void
}
export const menuStore = create<MenuStore>((set) => ({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (isOpen: boolean) => set({isMobileMenuOpen: isOpen})
}))