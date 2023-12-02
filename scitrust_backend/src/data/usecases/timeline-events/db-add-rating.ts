import { AddRatingRepository } from "src/data/protocols/db/periodicals/add-rating-repository";
import { AddRating } from "src/domain/usecases/periodicals/add-rating";

export class DbAddRating implements AddRating {
  constructor(
    private readonly addRatingRepository: AddRatingRepository,
  ) { }
  async addRating(params: AddRating.Params): Promise<AddRating.Return> {
      const newRating = await this.addRatingRepository.addRating(params);
      return newRating;
  }
}
