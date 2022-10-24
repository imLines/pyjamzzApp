import { useState } from "react";
import { useNavigate } from "react-router-dom";
import storage from '../../../../config/firebase';

function CreateProduct(){
    const [name, setName] = useState('');
    const [environment, setEnvironment] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState('');
    const [priceInteger, setPriceInteger] = useState(0);
    const [priceFloat, setPriceFloat] = useState(0);
    const [novelty, setNovelty] = useState(true);
    const [color, setColor] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [url3, setUrl3] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        e.stopPropagation()
        try{

            storage.ref(`/${environment}/${category}/${name+1}`).put(img1)
            .on("state_changed", console.log(), alert, () => {
                // Getting Meta Data Of File
                storage.ref(`/${environment}/${category}/`).child(name+1).getDownloadURL()
                .then((url) => {
                    return setUrl1(url);
                })
            })
            storage.ref(`/${environment}/${category}/${name+2}`).put(img2)
            .on("state_changed", console.log(), alert, () => {
                // Getting Meta Data Of File
                storage.ref(`/${environment}/${category}/`).child(name+2).getDownloadURL()
                .then((url) => {
                    return setUrl2(url);
                })
            })
            storage.ref(`/${environment}/${category}/${name+3}`).put(img3)
            .on("state_changed", console.log(), alert, () => {
                // Getting Meta Data Of File
                storage.ref(`/${environment}/${category}/`).child(name+3).getDownloadURL()
                .then((url) => {
                    return setUrl3(url);
                })
            })
            const token = localStorage.getItem('token');
            const stringPrice = priceInteger + "." + priceFloat
            const priceTTC = Number(stringPrice);

            
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'Authorization': token
                },
                body: JSON.stringify({name, environment, category, description, priceTTC, novelty, color, url1, url2, url3})
            };
            fetch('/product/new', requestOptions)
            .then(promise =>{
                if(promise.status == 201){
                    navigate('/admin/manager/products')
                }else{
                    return promise.json()
                }
            })
            .then(data=>{
                setErrorMessage(data?.message)
            })
        }catch(e){
            console.log(e)
        }
    }

    


    return(
        <>
            <p>{errorMessage}</p>
            <form onSubmit={handleSubmit}>
                <div className="row-section">
                    <label htmlFor="name">Nom :</label>
                    <input type='text' name="name" placeholder="Nom" onChange={event=>setName(event.target.value)} required/>
                </div>
                <div className="row-section">
                    <label htmlFor="environment">Environnement :</label>
                    <select name='environment' onChange={event=>setEnvironment(event.target.value)} required>
                        <option value={null}>Choisir l'environement</option>
                        <option value='ange'>Ange</option>
                        {/* <option value='demon'>Demon</option> */}
                    </select>
                </div>
                <div className="row-section">
                    <label htmlFor="category">Catégorie :</label> 
                    <select name='category' onChange={event=>setCategory(event.target.value)} required>
                        <option value={null}>Choisir une catégorie</option>
                        <option value='brassiere'>Brassière</option>
                        <option value='culotte'>Culotte</option>
                        <option value='nuisette'>Nuisette</option>
                        <option value='pyjamasange'>Pyjamas Ange</option>
                        <option value='shorty'>Shorty</option>
                        <option value='soutiensgorge'>Soutiens Gorge</option>
                    </select>
                </div>
                <div className="row-section">
                    <label htmlFor="description">Description :</label>
                    <textarea rows='5' placeholder="description" onChange={event=>setDescription(event.target.value)} required/>
                </div>
                <div className="row-section">
                    <label htmlFor="price">Prix :</label>
                    <input name='price' type='number' placeholder="euros" onChange={event=>setPriceInteger(event.target.value)} required/>
                    <input name='price' type='number' placeholder="centimes" onChange={event=>setPriceFloat(event.target.value)} required/>
                </div>
                <div className="row-section">
                    <label htmlFor="novelty">Nouveautée : </label>
                    <select name="novelty" onChange={event=>setNovelty(event.target.value)} required>
                        <option value={true}>Oui</option>
                        <option value={false}>Non</option>
                    </select>
                </div>
                <div className="row-section">
                    <label htmlFor="color">Couleur :</label>
                    <input type='text' placeholder="couleur" onChange={event=>setColor(event.target.value)} required/>
                </div>
                <div className="row-section">
                    <label htmlFor="img-1">Image 1 :</label>
                    <input type='file' name="img-1" onChange={event=>setImg1(event.target.files[0])} required/>
                    <label htmlFor="img-2">Image 2 :</label>
                    <input type='file' name="img-2" onChange={event=>setImg2(event.target.files[0])} required/>
                    <label htmlFor="img-3">Image 3 :</label>
                    <input type='file' name="img-3" onChange={event=>setImg3(event.target.files[0])} required/>
                </div>
                <button type='submit'>Créer le produit</button>
            </form>
        </>
    )
};

export default CreateProduct;