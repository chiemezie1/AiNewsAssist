import { motion } from 'framer-motion'

export default function ProfileMenu({ isProfileOpen }) {
  if (!isProfileOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute right-0 mt-2 w-48 bg-card rounded-lg shadow-lg z-50"
    >
      <div className="py-2">
        <a href="#" className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
          Profile
        </a>
        <a href="#" className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
          Settings
        </a>
        <a href="#" className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground">
          Log out
        </a>
      </div>
    </motion.div>
  )
}
