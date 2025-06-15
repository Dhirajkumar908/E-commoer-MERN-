import Newl1 from '/img/newL1.webp'
import Newl2 from '/img/newL2.webp'
import Newl3 from '/img/newL3.jpg'

function NewLaunchSection() {
  return (
    <>
      <div className="grid grid-cols-4 my-20 bg-amber-50 rounded-lg shadow-md ">
        <div className="flex flex-col gap-5  h-[600px]   p-5 ">
            <h1 className="text-5xl font-bold text-amber-400">Plan to</h1>
            <h1 className="text-5xl font-bold text-amber-600">Lanched new</h1>
            <h1 className="text-5xl font-bold text-amber-700">Products</h1>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos odit pariatur quidem minus possimus, blanditiis quae? Ad voluptas natus expedita unde laboriosam, corporis velit omnis consequatur voluptatem aut, dolorem id veritatis veniam, nobis itaque? Labore explicabo recusandae aperiam est libero ullam sequi laboriosam, quia odit quibusdam nemo excepturi quod!</p>
        </div>
        <div className="flex justify-evenly gap-5 h-[650px]  col-span-3 items-end p-5 ">
            <div className="flex flex-col justify-end items-center p-5 gap-5 w-80 h-80  md:h-[500px]  rounded-lg shadow-lg transition duration-700 ease-in-out hover:-translate-y-8" style={{backgroundImage:`url(${Newl1})`, backgroundSize:'cover', backgroundPosition:'center' }}>
              <button className='border rounded bg-green-200 px-3 py-1'>Now more</button>
              <h4 className='font-semibold text-white text-center'>Newly lunched traditional bag, New style athenic wearing matched hand bad</h4>
            </div>
            <div className="flex flex-col justify-end items-center p-5 gap-5 w-80 h-80  md:h-[500px]  rounded-lg shadow-lg transition duration-700 ease-in-out hover:-translate-y-8 mb-10" style={{backgroundImage:`url(${Newl2})`, backgroundSize:'cover', backgroundPosition:'center' }}>
              <button className='border rounded bg-green-200 px-3 py-1'>Now more</button>
              <h4 className='font-semibold text-white text-center'>Newly lunched traditional bag, New style athenic wearing matched hand bad</h4>
            </div>
            <div className="flex flex-col justify-end items-center p-5 gap-5 w-80 h-80  md:h-[500px]  rounded-lg shadow-lg transition duration-700 ease-in-out hover:-translate-y-8" style={{backgroundImage:`url(${Newl3})`, backgroundSize:'cover', backgroundPosition:'center' }}>
              <button className='border rounded bg-green-200 px-3 py-1'>Now more</button>
              <h4 className='font-semibold text-white text-center'>Newly lunched traditional bag, New style athenic wearing matched hand bad</h4>
            </div>
        </div>
      </div>
    </>
  );
} 

export default NewLaunchSection;
