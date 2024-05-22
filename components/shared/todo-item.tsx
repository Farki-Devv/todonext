import React, { useState } from 'react'
import { Button } from '../ui/button'
import { PencilRuler, Trash2 } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '../ui/input'

interface Props {
	todo: string
	onDelete: () => void
	onEdit: (newText: string) => void
	index: number
}

function TodoItem({ todo, onDelete, onEdit, index }: Props) {
	const [isEditing, setIsEditing] = useState(false)
	const [editedText, setEditedText] = useState(todo)

	const handleEditClick = () => {
		setIsEditing(true)
	}

	const handleSave = () => {
		onEdit(editedText)
		setIsEditing(false)
	}
	return (
		<div className='w-full h-[80px] rounded bg-gradient-to-t  from-purple-400 to-purple-900  flex items-center px-10 justify-between mt-2'>
			{isEditing ? (
				<Input
					className='font-bold bg-gray-200 text-black'
					value={editedText}
					onChange={e => setEditedText(e.target.value)}
				/>
			) : (
				<span className='font-bold flex gap-2 text-white w-[200px] custom-scrollbar   overflow-scroll'>
					<span className='text-orange-400'>{index + 1})</span>
					{todo}
				</span>
			)}
			<div className='flex items-center gap-4'>
				{isEditing ? (
					<Button onClick={handleSave} className='ml-2'>
						Save
					</Button>
				) : (
					<>
						<div className='flex gap-4 items-center'>
							<Button variant={'secondary'} onClick={onDelete}>
								<Trash2 />
							</Button>
							<Button variant={'orange'} onClick={handleEditClick}>
								<PencilRuler />
							</Button>
							<Button variant={'secondary'}>
								<Checkbox />
							</Button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default TodoItem
