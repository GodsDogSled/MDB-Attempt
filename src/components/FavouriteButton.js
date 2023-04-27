import { useEffect, useState } from "react";


function FavouriteButton({movieObject, remove,handleFavClick}){
  const [doLikeAnimation, setDoLikeAnimation] =  useState(false);
  const [doUnlikeAnimation, setDoUnlikeAnimation] =  useState(false);
  
  const ToggleLikeClass = () => {
    setDoLikeAnimation(!doLikeAnimation); 
  };

  const ToggleUnlikeClass = () => {
    setDoUnlikeAnimation(!doUnlikeAnimation); 
  };

  function handleAddFav() {
    handleFavClick(true, movieObject);
    setDoLikeAnimation(true);
   
  }

  function handleRemoveFav() {
    handleFavClick(false, movieObject);
    setDoUnlikeAnimation(true);
  }

  return(
    <>
    {remove === false ? (
      <button onClick={handleAddFav}>
        <svg className={doUnlikeAnimation ? "unliked" : "nothing"} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44zm.678 2.033-2.361 4.792-5.246.719 3.848 3.643-.948 5.255 4.707-2.505 4.707 2.505-.951-5.236 3.851-3.662-5.314-.756z" fillRule="nonzero"/></svg>
      </button>
    ) : (
      <button onClick={handleRemoveFav}>
        <svg className={doLikeAnimation ? "liked" : "nothing"} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero"/></svg>
      </button>
    )}
  </> 
  )
}

FavouriteButton.defaultProps = {
  remove: false,
};



export default FavouriteButton;