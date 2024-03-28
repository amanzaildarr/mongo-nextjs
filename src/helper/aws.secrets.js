"use server";

import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from "@aws-sdk/client-secrets-manager";

export async function getAwsSecrets() {
  const smClient = new SecretsManagerClient({
    region: process.env.AWS_REGION,
  });
  const smCommand = new GetSecretValueCommand({
    SecretId: process.env.AWS_SECRET_MANAGER_NAME,
  });
  const response = await smClient.send(smCommand);
  return JSON.parse(response.SecretString);
}
