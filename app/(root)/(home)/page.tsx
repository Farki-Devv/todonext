'use client'

import TodoItem from '@/components/shared/todo-item'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Image from 'next/image'

function Page() {
	const { toast } = useToast()
	const [text, setText] = useState('')
	const [data, setData] = useState<string[]>([])
	const handleAddTodo = () => {
		if (!text) {
			toast({
				title: 'Enter data into the input',
			})
		} else {
			setData(prevData => [...prevData, text])

			setText('')
		}
	}

	const handleDeleteTodo = (index: number) => {
		setData(prevData => prevData.filter((_, idx) => idx !== index))
	}
	const handleEditTodo = (index: number, newText: string) => {
		setData(prevData => {
			const updatedData = [...prevData]
			updatedData[index] = newText
			return updatedData
		})
	}
	return (
		<div className='w-[1000px] h-[600px] max-md:w-[500px] m-auto bg-white rounded-md mt-2'>
			<div className='flex gap-4 p-4'>
				<Input
					className='rounded-full border-none  h-[60px] bg-gray-300 font-bold outline-none text-black'
					placeholder='Write to todo text '
					value={text}
					onChange={e => setText(e.target.value)}
				/>
				<Button
					className='w-[140px] h-[60px] rounded-full bg-orange-500 hover:bg-orange-800'
					onClick={handleAddTodo}
				>
					Add
				</Button>
			</div>
			<div className='p-4'>
				{data.map((todo, index) => (
					<TodoItem
						key={index}
						todo={todo}
						index={index}
						onDelete={() => handleDeleteTodo(index)}
						onEdit={newText => handleEditTodo(index, newText)}
					/>
				))}
			</div>
			{data.length === 0 ? (
				<>
					<section className='bg-whit'>
						<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
							<div className='mx-auto max-w-screen-sm text-center'>
								<p className='bg-gradient-to-r from-purple-900 font-bold to-purple-800 bg-clip-text text-transparent'>
									To add a todo, type information in the input
								</p>
								<Image
									src='/not-found.png'
									alt='todo'
									className='mx-auto'
									width={400}
									height={300}
								/>
							</div>
						</div>
					</section>
				</>
			) : (
				''
			)}
		</div>
	)
}

export default Page
