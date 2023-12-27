import s from './CategoriesItem.module.scss'

function CategoriesItem({img, name, id, }){



    return(
            <li key={id} >
              <div
                style={{
                  background: `url(http://localhost:3333${img})`,
                  height: '350px',
                  alignSelf: 'stretch',
                  borderRadius: 12
                }} 
              ></div>
              <p >{name}</p>
            </li>
    )

}

export default CategoriesItem