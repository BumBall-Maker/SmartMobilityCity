import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { NavMesh, NavMeshAgent } from 'UnityEngine.AI';
import { Transform } from 'UnityEngine';

export default class AutoMove extends ZepetoScriptBehaviour {

    private test : NavMesh;
    private agent : NavMeshAgent;
    public target : Transform;
    public move : boolean;

    Awake() {
        this.agent = this.GetComponent<NavMeshAgent>();
        this.move = false;
    }
    Update(){
        if(this.move == true)
        {
        this.agent.SetDestination(this.target.position);
        }
    }

}