
import CardGift from "../ui/CardGift/CardGift";
import { useAppSelector } from "../../hooks/redux";



const Giflist = () =>{

const gift = useAppSelector(state => state.gift.gift)

    return(
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, .6fr)',
            gap: '2vh'
        }}>
            {
                gift.map((el, index) =>(
                    <CardGift gift={el} key={index} />
                ))
            }
        
        </div>
    )
}

export default Giflist