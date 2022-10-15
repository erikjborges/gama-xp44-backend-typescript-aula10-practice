import { ClientEntity } from "../../entities/clients/client.entity";
import { IClientsRepository } from "../../repositories/clients.repository.interface";
import ClientsRepository from "../../../adapters/repositories/clients.repository";
import { IUseCase } from "../usecase.interface";

class ReadClientUseCase implements IUseCase {

    constructor(private _repository: IClientsRepository) {

    }

    async execute(data: { clientId: number }): Promise<ClientEntity | undefined> {
        try{
            return await this._repository.readById(data.clientId);
        } catch(err){
            throw new Error((err as Error).message);
        }
    }
}

export default new ReadClientUseCase(
    ClientsRepository
);