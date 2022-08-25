import { Canvas, AnimationClip, WaitForSeconds, GameObject, Object, Random, Vector3, Quaternion, Sprite } from 'UnityEngine';
import { Button, Image } from 'UnityEngine.UI';
import { ZepetoPlayers, ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import AutoMove from './AutoMove';

export default class InteractionWeather extends ZepetoScriptBehaviour 
{
    public openWeatherButton: Button;
    public openWeatherLoadButton: Button;
    public openWeatherImage: Image;
    public openWeatherLoadImage: Image;
    public interactionCanvas: Canvas;
    private zepetoCharacter :ZepetoCharacter;

    Start() 
    {    
        // Set EventCamera 
        this.interactionCanvas.worldCamera = ZepetoPlayers.instance.ZepetoCamera.camera;
        // Set character
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
            
        });
       
        
        //버튼 숨기기
        this.openWeatherLoadButton.gameObject.SetActive(false);
        this.openWeatherLoadImage.gameObject.SetActive(false);
        this.openWeatherButton.gameObject.SetActive(false);
        this.openWeatherImage.gameObject.SetActive(false);
        
        //버튼 누를때 좌표이동 후 딜레이 이후 애니메이션 실행
        this.openWeatherButton.onClick.AddListener(()=>{
            this.openWeatherLoadButton.gameObject.SetActive(false);
            this.openWeatherLoadImage.gameObject.SetActive(false);
            this.openWeatherButton.gameObject.SetActive(false);
            this.openWeatherImage.gameObject.SetActive(false);
        });

        this.openWeatherLoadButton.onClick.AddListener(()=>{
            this.openWeatherLoadButton.gameObject.SetActive(false);
            this.openWeatherLoadImage.gameObject.SetActive(false);
            this.openWeatherButton.gameObject.SetActive(true);
            this.openWeatherImage.gameObject.SetActive(true);
        });
    }
    
    OnTriggerEnter(collider)
    {
        this.openWeatherLoadButton.gameObject.SetActive(true);
        this.openWeatherLoadImage.gameObject.SetActive(true);
    }

   
    OnTriggerExit(collider)
    {
        this.openWeatherLoadButton.gameObject.SetActive(false);
        this.openWeatherLoadImage.gameObject.SetActive(false);
        this.openWeatherButton.gameObject.SetActive(false);
        this.openWeatherImage.gameObject.SetActive(false);
    }
  
}