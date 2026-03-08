import { Sidebar ,ClientVueHeader , ClientCard  , MedicalNotes , Appointments , Vitals
    , Prescriptions
} from '../features/script';
function ClientVue() {
  return (
    <div className='bg-gray-100'>
        <ClientVueHeader />
        <div className="flex gap-6 mt-6 ">
        <Sidebar />
        <ClientCard />
        </div>
        <div className="flex w-full gap-2 mt-6">
        <MedicalNotes  />
        <Appointments />
        </div>
<div className="flex mt-3 justify-between gap-4">
  <Vitals />
  <Prescriptions />
</div>

    </div>
  
  )
}

export default ClientVue