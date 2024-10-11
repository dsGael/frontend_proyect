import { faPlus, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashButton } from '../components/DashButton';





function Dashboard(){
  const handleAddClick()=>{

    
  };

    return(
           <div className="container px-6 mx-auto grid">
             <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
               Dashboard
             </h2>
       
             {/* CTA */}
       
             {/* Cards */}
             <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
               {/* Card */}
               <DashButton id={'añadirBtn'} text={'Añadir'} icon={faPlus} functionB={} />
       
               <button id="backupBtn" className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                 <div
                   className="p-3 mr-4 bg-blue-100 rounded-full dark:bg-orange-500 flex items-center justify-center"
                   style={{ width: '50px', height: '50px' }}
                 >
                   <FontAwesomeIcon icon={faCloudArrowUp} className="text-blue-500 dark:text-orange-100" />
                 </div>
       
                 <div>
                   <p className="my-2 text-xl font-medium text-gray-600 dark:text-gray-400">
                     Respaldos
                   </p>
                 </div>
               </button>
             </div>
           </div>
     );
   }
  
   export default Dashboard;