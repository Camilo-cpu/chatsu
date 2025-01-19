import { BotIcon,Loader,User2Icon } from 'lucide-react'
import React from 'react'
import {marked} from 'marked';
type Props = {
    isAI: boolean
    mensaje: string
    isLoading?: boolean
}

const Mensaje = ({
    isAI,
    mensaje,
    isLoading= false
}: Props) => {

    const formattedMensaje = isAI ? marked(mensaje) : mensaje
    return (
        <div className={`flex w-full p-4 h-fit ${!isAI && 'flex-row-reverse'}`}>
            <div className={`flex min-h-16 gap-4 text-gray-200 ${!isAI && 'bg-slate-700 flex-row-reverse w-fit p-4 rounded-lg'}`}>
                <div>
                {isAI
                ? <BotIcon/>
                : <User2Icon/>
                }
                </div>

        <div className='w-full'>
            {isLoading 
            ? <Loader className='animate-spin'/>
            : isAI 
                ? <div dangerouslySetInnerHTML={{__html: formattedMensaje }} />
                : <p>{mensaje}</p>
            }
        </div>
                     
        </div>


            
            
        </div>
    )
}

export default Mensaje