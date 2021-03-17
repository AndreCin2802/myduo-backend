import { Request, Response } from 'express'

import { UpdateUserAvatarService } from '../services/updateUserAvatarService'

export class UserAvatarController {
  async update (request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService()

    const user = await updateAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename
    })

    return response.json(user)
  }
}
