import { useState } from "react";
import storage from '../../../../config/firebase';

function CreateProduct(){
    const [name, setName] = useState('');
    const [environment, setEnvironment] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [novelty, setNovelty] = useState(true);
    const [color, setColor] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [value, setValue] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.stopPropagation()
        try{
            const token = localStorage.getItem('token');
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'Authorization': token
                },
                body: JSON.stringify({name, environment, category, description, price, novelty, color})
            };


            // Sending File to Firebase Storage
            storage.ref(`/images/${img1.name}`).put(img1)
            .on("state_changed", alert("success"), alert, () => {
            // Getting Meta Data Of File
            storage.ref("images").child(img1.name).getMetadata()
            .then((data) => {
                setValue(data);
                })
            })


        }catch(e){
            console.log(e)
        }
    }

    const test = async (e)=>{
        e.preventDefault()
        e.stopPropagation()

        storage.ref(`/images/${img1.name}`).put(img1)
            .on("state_changed", alert("success"), alert, () => {
            // Getting Meta Data Of File
            storage.ref("images").child(img1.name).getMetadata()
            .then((data) => {
                setValue(data);
                console.log(data)
                })
            })
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="row-section">
                    <label htmlFor="name">Nom :</label>
                    <input type='text' name="name" placeholder="Nom" onChange={event=>setName(event.target.value)} required/>
                </div>
                <div className="row-section">
                    <label htmlFor="environment">Environnement :</label>
                    <select name='environment' onChange={event=>setEnvironment(event.target.value)} required>
                        <option value='ange'>Ange</option>
                        {/* <option value='demon'>Demon</option> */}
                    </select>
                </div>
                <div className="row-section">
                    <label htmlFor="category">Catégorie :</label>
                    <select name='category' onChange={event=>setCategory(event.target.value)} required>
                        <option value='brassiere'>Brassière</option>
                        <option value='culotte'>Culotte</option>
                        <option value='nuisette'>Nuisette</option>
                        <option value='pyjamas-ange'>Pyjamas Ange</option>
                        <option value='shorty'>Shorty</option>
                        <option value='soutiens-gorge'>Soutiens Gorge</option>
                    </select>
                </div>
                <div className="row-section">
                    <label htmlFor="description">Description :</label>
                    <textarea rows='5' placeholder="description" onChange={event=>setDescription(event.target.value)} required/>
                </div>
                <div className="row-section">
                    <label htmlFor="price">Prix :</label>
                    <input name='price' type='number' placeholder="prix" onChange={event=>setPrice(event.target.value)} required/>
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
                <button onClick={test}>LikeThis</button>
            <div>
              <h2>Name : {value?.name}</h2>
              <h2>Size : {value?.size}</h2>
              <h2>Path : {value?.fullpath}</h2>
              <h2>Time : {value?.timeCreated}</h2>
            </div>
        </>
    )
};

export default CreateProduct;