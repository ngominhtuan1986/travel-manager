import { ChevronDown } from 'lucide-react';

const AddModal = () => {
	return (
		<div className="fixed z-50 bottom-0 left-0 right-0 max-h-[70vh] sm:min-h-[80vh] bg-white border-t shadow-top rounded-t-xl overflow-y-scroll no-scrollbar">
			<div className="container mx-auto flex flex-col gap-3 pb-2">
				<div className="flex w-full items-center flex-col py-2">
					<ChevronDown size={15} />
					<span className="text-xs">Add new booking</span>
				</div>
				<form className="flex gap-2 flex-wrap">
					<input type="date" className="inputAdd btnFocus" />
					<input type="time" className="inputAdd btnFocus" />
					<select name="" id="" className="inputAdd btnFocus">
						<option value="">ORS</option>
						<option value="">DMC</option>
					</select>
					<select name="" id="" className="inputAdd btnFocus">
						<option value="">5 chỗ</option>
						<option value="">7 chỗ</option>
						<option value="">16 chỗ</option>
						<option value="">29 chỗ</option>
						<option value="">Limo</option>
					</select>
					<input
						type="text"
						placeholder="Booking Id"
						className=" max-w-[50%] inputAdd btnFocus"
					/>
					<select name="" id="" className="inputAdd btnFocus">
						<option value="">12Go</option>
						<option value="">GYG</option>
						<option value="">Talixo</option>
						<option value="">Jayride</option>
						<option value="">Viator</option>
						<option value="">Intui</option>
						<option value="">BookTaxi</option>
					</select>
					<input
						type="text"
						placeholder="From"
						className="min-w-full inputAdd btnFocus"
					/>
					<input
						type="text"
						placeholder="To"
						className=" min-w-full inputAdd btnFocus"
					/>
					<div className="w-full grid grid-cols-2 gap-2 wrap">
						{/* <div className='cols-span-1'>a</div>
            <div className='cols-span-1'>a</div>
            <div className='cols-span-1'>a</div>
            <div className='cols-span-1'>a</div> */}
						<input
							type="text"
							placeholder="Pax Name"
							className=" cols-span-1 inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Phone"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Email"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Number"
							className=" inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Name"
							className=" cols-span-1 inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Phone"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Email"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Number"
							className=" inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Name"
							className=" cols-span-1 inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Phone"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Email"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Number"
							className=" inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Name"
							className=" cols-span-1 inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Phone"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Email"
							className="  inputAdd btnFocus"
						/>
						<input
							type="text"
							placeholder="Pax Number"
							className=" inputAdd btnFocus"
						/>
					</div>
					<button className="btn">Discard</button>
					<button className="btn">Clear</button>
					<button className="btn">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default AddModal;
