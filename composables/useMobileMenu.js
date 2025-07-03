export const useMobileMenu = () => {
  const isMobileMenuOpen = useState('mobileMenuOpen', () => false)
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }
  
  return {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
} 