import ModeToggle from '@/components/shared/toogle-mode'
import { Button } from '@/components/ui/button'
import { BadgeCheck } from 'lucide-react'
import React from 'react'

function Navbar() {
	return (
		<div className='max-w-7xl mt-2 rounded mx-auto bg-white h-[60px] flex justify-between items-center px-20'>
			<span className='font-bold text-[22px] text-orange-400 flex items-center gap-2'>
				<BadgeCheck />
				Todo
			</span>

			<div className='flex items-center gap-2'>
				
				<ModeToggle />
			</div>
		</div>
	)
}

export default Navbar
