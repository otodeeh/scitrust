import { AddRating } from "src/domain/usecases/periodicals/add-rating";

export interface AddRatingRepository {
  addRating(params: AddRating.Params): Promise<AddRating.Return>;
}
