
import { ESUSU } from "../addresses/localhost";
import EsusuAdpter from '../abis/EsusuAdapter.json';
import createContract from "../create.contract";


type Args = {
  provider: string
  groupId: number
}


export default async function (args: Args) {

  let { provider, groupId } = args;

  try {

    //
    const contract = await createContract(provider, EsusuAdpter.abi, ESUSU.ESUSU_ADAPTER);

    const data = await contract.methods.GetGroupInformationById(groupId).call();

    return data;

  } catch (err) {

    console.error(err);
    return {}

  }

}