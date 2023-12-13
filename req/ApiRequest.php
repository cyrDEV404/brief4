<?php

/**
 * Permet de récupérer des données json et de les traiter
 * via une API
 * 
 * @param string $url
 */
class ApiRequest
{
    protected $url;
    
    /**
     * Récupération des données brutes de l'API
     * 
     * @return string|bool
     */
    private function fetchData()
    {
        $curl = curl_init($this->url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        $data = curl_exec($curl);
        if (!$data) {
            throw new Exception(curl_error($curl));
        }
        curl_close($curl);

        return $data;
    }

    /**
     * Décode le JSON provenant de l'API
     * 
     * @param string $jsonString
     * @param ?bool $associative
     */
    private function decode($jsonString, $associative)
    {
        $data = json_decode($jsonString, $associative);
        if(is_array($data) || is_object($data)) {
            return $data;
        } else {
            throw new Exception('Mauvais format de données');
        }
    }

    /**
     * Encode les paramètres retournés du formulaire
     * Utilisée dans la classe enfant
     * 
     * @param string $url
     * 
     * @return string
     */
    protected function encodeUrl($url) {
        return urlencode($url);
    }

    /**
     * Retourne les données décodées
     * 
     * @return mixed
     */
    protected function getData()
    {
        return $this->decode($this->fetchData(), JSON_FORCE_OBJECT);
    }
}
