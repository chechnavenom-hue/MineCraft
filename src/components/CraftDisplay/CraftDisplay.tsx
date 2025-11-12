import type { ReceptT } from '../../data/recepts'
import './CraftDisplay.css'

type CraftDisplayProps = {
    recept: ReceptT
}

function CraftDisplay({ recept }: CraftDisplayProps) {

    const materialsdiv = recept.rawMaterials.map((materials) => (
        <div key={materials.id} className='material-container'>
            <div>{materials.title}</div>
            <div className='img-box'></div>
            <div>{materials.count} шт</div>
        </div>
    ))
    return (
        <div className='craftT-container'>
            <div className='craft-desc'>
                <div>{recept.title}</div>
                <div className='desc-info'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
            <div className='craft-req'>
                <div>Требование к крафту</div>
                <div className='materials-container'>{materialsdiv}</div>
            </div>

            <div className='btn-start'>Начать</div>
        </div>
    )
}

export default CraftDisplay