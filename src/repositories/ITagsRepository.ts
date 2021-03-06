import { Tag } from '../entities/Tag';

export type ICreateTag = {
  name: string;
};

export type ITagsRepository = {
  create(data: ICreateTag): Promise<Tag>;
  findByName(name: string): Promise<Tag | undefined>;
  findById(id: string): Promise<Tag | undefined>;
  findAll(): Promise<Tag[]>;
};
